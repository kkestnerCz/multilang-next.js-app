import { useState } from 'react'
import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'

// MUI icons
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'

// flags
import Flag from 'react-world-flags'

const actions = [
  { icon: <Link href="/" passHref locale="cs"><Box sx={{height: '16px'}}><Flag code="cz" height="16" /></Box></Link>, name: 'CS' },
  { icon: <Link href="/en" passHref locale="en"><Box sx={{height: '16px'}}><Flag code="gb" height="16" /></Box></Link>, name: 'EN' },
  { icon: <Link href="/mn" passHref locale="mn"><Box sx={{height: '16px'}}><Flag code="mn" height="16" /></Box></Link>, name: 'MN' },
];

export default function LangSelector({isSm}) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', right: isSm ? 0 : 16 }}
        icon={<EmojiFlagsIcon fontSize={isSm ? 'small' : 'medium'}/>}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction='down'
        FabProps={{
            size: isSm ? 'small' : 'large'
        }}
    >
    {actions.map((action) => (
        <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={handleClose}
        />
    ))}
    </SpeedDial>
  )
}