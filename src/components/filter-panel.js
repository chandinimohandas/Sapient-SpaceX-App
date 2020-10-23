import React, { useState, useEffect } from 'react';
import '../styles/filter-panel.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function FilterPanel() {
    const [launchYears, setLaunchYears] = useState([]);
    const [launchClasses, setLaunchClasses] = useState(['', '']);
    const [landingClasses, setLandingClasses] = useState(['', '']);

    useEffect(() => {
        setLaunchYears(Array.apply(0, Array(15)).map(function (_, index) { return { value: index + 2006, class: '' }; }));
    }, []);

    const onClickYears = (value) => {
        console.log(value);
        setLaunchYears(launchYears.map(x => { return x.value === value ? { value: x.value, class: 'button-bg-color' } : { value: x.value, class: '' } }))
    }

    const onClickLaunchOrLanding = (isLaunch, bool) => {
        isLaunch ?
            setLaunchClasses(bool ? ['button-bg-color', ''] : ['', 'button-bg-color']) :
            setLandingClasses(bool ? ['button-bg-color', ''] : ['', 'button-bg-color']);
    }
    return (
        <div>
            <p><strong>Filters</strong></p>
            <p className='filter-border-bottom'>Launch Year</p>
            <Grid container spacing={1}>
                {launchYears.map(year => {
                    return <Grid key={year.value} item item xs={4}>
                        <Button variant="contained" size="small" className={year.class} onClick={() => onClickYears(year.value)}>{year.value}</Button>
                    </Grid>
                })}
            </Grid>
            <p className='filter-border-bottom'>Successful Launch</p>
            <Grid container spacing={1}>
                <Grid item item xs={6}>
                    <Button variant="contained" size="small" className={launchClasses[0]} onClick={() => { onClickLaunchOrLanding(true, true) }}>True</Button>
                </Grid>
                <Grid item item xs={6}>
                    <Button variant="contained" size="small" className={launchClasses[1]} onClick={() => { onClickLaunchOrLanding(true, false) }}>False</Button>
                </Grid>
            </Grid>
            <p className='filter-border-bottom'>Successful Landing</p>
            <Grid container spacing={1}>
                <Grid item item xs={6}>
                    <Button variant="contained" size="small" className={landingClasses[0]} onClick={() => { onClickLaunchOrLanding(false, true) }}>True</Button>
                </Grid>
                <Grid item item xs={6}>
                    <Button variant="contained" size="small" className={landingClasses[1]} onClick={() => { onClickLaunchOrLanding(false, false) }}>False</Button>
                </Grid>
            </Grid>
        </div>
    );
}