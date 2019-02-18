import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

export default function Content({classes}) {
    return (
        <main className={classes.contentDefaultRoot}>
            <div className={classes.contentDefaultAppbarSpacer} />
            <Typography variant='h4' gutterBottom component='h2'>
                Welcome
            </Typography>
        </main>
    )
}

Content.propTypes = {
    classes: PropTypes.object.isRequired
}