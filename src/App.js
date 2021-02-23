import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { FindReplaceTwoTone, ThreeSixty } from '@material-ui/icons';


class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) =>
            <Palette palette={ generatePalette(
              this.findPalette(routeProps.match.params.id) 
              )}
            />
          }
        />
        <Route path="/palette/:paletteID/:colorID" render={() => <h1>Single color page</h1>}/>
      </Switch>
    );
  }
}

export default App;
