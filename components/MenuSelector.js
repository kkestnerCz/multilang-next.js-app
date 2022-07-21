import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

// MUI
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'

// MUI icons
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import TimelineIcon from '@mui/icons-material/Timeline'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'


export default function MenuSelector({isSm}) {
  const { t } = useTranslation('common')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const actions = [
    { icon: <Link href="/component" passHref><TimelineIcon /></Link>, name: <Box sx={{whiteSpace: 'pre'}}>{t('menu1')}</Box> },
    { icon: <Link href="/page" passHref><TextSnippetIcon /></Link>, name: <Box sx={{whiteSpace: 'pre'}}>translated page</Box> },
    { icon: <Link href="/robots.txt"><a target="_blank"><Box sx={{display: 'flex', alighnItems: 'center'}}><TextSnippetIcon /></Box></a></Link>, name: <Box sx={{whiteSpace: 'pre'}}>localized robots.txt</Box> }
  ]

  return (  
    <SpeedDial
      ariaLabel="SpeedDial controlled open example"
      sx={{ position: 'absolute', right: isSm ? 'unset' : 85, left: isSm ? 0 : 'unset' }}
      icon={<AutoStoriesIcon fontSize={isSm ? 'small' : 'medium'}/>}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction='down'
      FabProps={{
          size: isSm ? 'small' : 'large',
          sx: {
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.main',
            }
          }
        }}
    >
      {actions.map((action, index) => (
        <SpeedDialAction
          key={index}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
          tooltipOpen
          tooltipPlacement={isSm ? 'right' : 'left'}
        />
      ))}
    </SpeedDial>
  )
}