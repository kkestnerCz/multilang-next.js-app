import { useEffect, useState, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

// custom components
import BasicLayout from '../components/BasicLayout'

// MUI
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function Component() {
  const [activeStep, setActiveStep] = useState(0)
  const [snckOpen, setSnckOpen] = useState(false)

  const { t } = useTranslation('component')

  const steps = [
    {
      label: t('label1'),
      description: t('description1')
    },
    {
      label: t('label2'),
      description: t('description2')
    },
    {
      label: t('label3'),
      description: t('description3'),
    },
  ]

  const handleClose = () => setSnckOpen(false)

  useEffect(() => {
    if(activeStep === steps.length) setSnckOpen(true)
  }, [activeStep, steps.length])


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <>
      <Head>
        <title>Multilang Next.js app - translation in component</title>
        <meta name="description" content="Multilang Next.js app - translation in component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">{t('lastStep')}</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? t('finish') : t('next')}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {t('back')}
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>{t('thatsAll')}</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  {t('reset')}
                </Button>
              </Paper>
            )}
          </Box>
          <Snackbar
            open={snckOpen}
            onClose={handleClose}
            autoHideDuration={6000}
          >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {t('snckBar')}
            </Alert>
          </Snackbar>
        </Grid>
      </BasicLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'component']),
  }
})