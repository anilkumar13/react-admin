import React, { useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'eng',
    label: 'English',
    icon: '/static/icons/ic_flag_en.svg',
  },
  {
    value: 'ger',
    label: 'German',
    icon: '/static/icons/ic_flag_de.svg',
  },
  {
    value: 'fre',
    label: 'French',
    icon: '/static/icons/ic_flag_fr.svg',
  },
  {
    value: 'hin',
    label: 'Hindi',
    icon: '/static/icons/ic_flag_fr.svg',
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const {i18n } = useTranslation();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedLang,setSelectedLang] = useState(LANGS[0])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (option) => {
    i18n.changeLanguage(option.value);
    setSelectedLang(option);
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
        <img
          src={
            selectedLang.icon
          }
          alt={selectedLang.label}
        />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option,i) => (
            <MenuItem
              key={option.value}
              selected={option.value === selectedLang.value}
              onClick={() => handleClose(option,i)}
            >
              <Box
                component="img"
                alt={option.label}
                src={
                  option.icon
                }
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}
