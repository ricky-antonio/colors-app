import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'

class PaletteMetaForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stage: 'form',
            newPaletteName: ""
        };
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    savePalette = (emoji) => {
        const newPalette = {
            paletteName: this.state.newPaletteName, 
            emoji: emoji.native
        }
        this.props.handleSubmit(newPalette);
        this.setState({stage: ''})
    };

    showEmojiPicker = () => {
        this.setState({stage: 'emoji'})
    }

    render() {
        const { newPaletteName, stage } = this.state;
        const { toggleForm, handleSubmit } = this.props;

        return (
            <>
                <Dialog open={stage === 'emoji'} onClose={toggleForm}>
                <DialogTitle id="form-dialog-title">Choose a Palette Emoji!</DialogTitle>
                    <Picker onSelect={this.savePalette} title='Pick a palette emoji'/>
                </Dialog>
                <Dialog
                    open={stage === 'form'}
                    onClose={toggleForm}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <ValidatorForm onSubmit={this.showEmojiPicker}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your new palette. Make sure it's unique!
                            </DialogContentText>
                            <TextValidator
                                label="Palette Name"
                                value={newPaletteName}
                                name="newPaletteName"
                                onChange={this.handleChange}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["This field is required", "That name is already taken"]}
                                fullWidth
                                margin='normal'
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={toggleForm} color="primary">
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </>
        );
    }
}

export default PaletteMetaForm;