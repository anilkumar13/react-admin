import LayoutConstant from "./layoutConstant";

export default function ChangeTheme(themeIndex){
    return{
        type: LayoutConstant.CHANGE_THEME,
        payload:themeIndex
    }
}
