import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles'

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "teal",
            newColorName: ""
        }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    }

    updateCurrentColor = (newColor) => {
        this.setState({ currentColor: newColor.hex })
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };
        this.props.addNewColor(newColor);
        this.setState({newColorName: ""})
    }

    render() {
        const { paletteIsFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <React.Fragment>
                <ChromePicker
                        color={currentColor}
                        onChangeComplete={this.updateCurrentColor}
                        className={classes.picker}
                    />
                    <ValidatorForm 
                        onSubmit={this.handleSubmit} 
                        className={classes.form}
                        instantValidate={false}
                    >
                        <TextValidator
                            value={newColorName}
                            name="newColorName"
                            className={classes.colorNameInput}
                            placeholder="Color Name"
                            variant="filled"
                            margin="normal"
                            onChange={this.handleChange}
                            validators={["required", "isColorNameUnique", "isColorUnique"]}
                            errorMessages={["This field is required", "That name is already taken", "That color is already being used"]}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
                            type="submit"
                            disabled={paletteIsFull}
                            className={classes.addColor}
                        >
                            {paletteIsFull ? "Palette Full" : "Add Color"}
                        </Button>
                    </ValidatorForm>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);