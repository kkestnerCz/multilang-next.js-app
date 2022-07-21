import theme from '../styles/theme'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'react-i18next'

// MUI
import Box from '@mui/material/Box'
import { useMediaQuery } from '@mui/material'

// custom components
import MenuSelector from './MenuSelector'
import LangSelector from './LangSelector'

export default function BasicLayout({children}) {
  const isSm = useMediaQuery(theme.breakpoints.down("sm"))
  const { t } = useTranslation('common')

  return (
    <>
      <div className={styles.container}>
        <Box sx={{ minHeight: '85vh', transform: 'translateZ(0px)', flexGrow: 1 }}>
          <MenuSelector isSm={isSm}/>
          <LangSelector isSm={isSm}/>
          <h1>3langApp</h1>
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', marginTop: isSm ? '45px': '10vh'}}>
            {children}
          </Box>
        </Box>
      </div>
      <Box sx={{ backgroundColor: '#f0f0f0', textAlign: 'center', padding: '10px'}}>
        {t('footer')}
      </Box>
    </>
  )
}