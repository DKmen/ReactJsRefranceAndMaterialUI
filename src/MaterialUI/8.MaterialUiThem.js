import { createMuiTheme } from "@material-ui/core/styles";

import {deepPurple} from '@material-ui/core/colors'
import {red} from '@material-ui/core/colors'



const MiuiThem=createMuiTheme({
    palette:{
        primary:{
            main: red[400],
            light:deepPurple[500]
        }
    }
})

export default MiuiThem;