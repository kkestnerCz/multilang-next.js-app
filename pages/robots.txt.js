const Robots = () => {}

export const getServerSideProps = async ({ res, locales }) => {
    let locs = locales.map((locale) => {
        // or some custom logic
        if (locale !== 'cs') return `\t Disallow /${locale}`
    })

    const disAllow = () => {
        return locs
    }

    const robots = `
    \t User-agent: Googlebot
    \t Disallow: /nogooglebot/
    
    \t User-agent: *
    \t Allow: /
    ${disAllow().join('\n')}
    `;


    res.setHeader("Content-Type", "text/plain")
    res.write(robots)
    res.end()

  return {
    props: {},
  }
}

export default Robots