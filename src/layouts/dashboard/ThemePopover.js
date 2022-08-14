import React,{useRef,useState} from 'react';
import { useDispatch } from "react-redux"
import { alpha } from '@mui/material/styles';
import { MenuItem, Stack, IconButton } from '@mui/material';
import Iconify from '../../components/Iconify';
import ChangeTheme from "../layoutsRedux/layoutAction";
// components
import MenuPopover from '../../components/MenuPopover';

export default function ThemePopover() {
  const dispatch = useDispatch();
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (option) => {
      // eslint-disable-next-line no-debugger
      debugger;
        dispatch(ChangeTheme(option))
        setOpen(false);
    };

  return (
    <>
    <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
         <Iconify icon="eva:bell-fill" width={20} height={20} />
      </IconButton>

      <MenuPopover
      open={open}
      onClose={handleClose}
      anchorEl={anchorRef.current}
      sx={{
        mt: 1.5,
        ml: 0.75,
        width: "auto",
        '& .MuiMenuItem-root': {
          px: 1,
          typography: 'body2',
          borderRadius: 0.75,
        },
      }}
    >
        <Stack spacing={0.75}>
            <MenuItem
              onClick={() => handleClose(1)}
            >
             Theme 1
            </MenuItem>
            <MenuItem
              onClick={() => handleClose(2)}
            >
              Theme 2
            </MenuItem>
        </Stack>
        </MenuPopover>
        </>
  )
}
