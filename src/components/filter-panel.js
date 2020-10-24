import React, { useState, useEffect } from 'react';
import '../styles/filter-panel.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function FilterPanel(props) {
    const { setSpaceXdata, setError } = props;

    const [launchYears, setLaunchYears] = useState([]);
    const [launchClasses, setLaunchClasses] = useState(['', '']);
    const [landingClasses, setLandingClasses] = useState(['', '']);
    const [filterValues, setFilterValues] = useState({ year: '', launch: '', landing: '' });

    useEffect(() => {
        setLaunchYears(Array.apply(0, Array(15)).map(function (_, index) { return { value: index + 2006, class: '' }; }));
    }, []);

    useEffect(() => {
        async function fetchFilteredData() {
            try {
                const response = await fetch(getAPI());
                const data = await response.json();
                setSpaceXdata(data.map(mission => {
                    return {
                        image: mission.links.mission_patch_small,
                        missionName: `${mission.mission_name} #${mission.flight_number}`,
                        missionIdList: mission.mission_id,
                        launchDate: mission.launch_year,
                        successfulLaunch: mission.launch_success,
                        successfulLanding: mission.rocket.first_stage.cores[0].land_success
                    }
                }));
            } catch (error) {
                console.error(error);
                setError(error);
            }
        }
        fetchFilteredData();
    }, [filterValues]);

    const getAPI = () => {
        let api = 'https://api.spaceXdata.com/v3/launches?limit=100';
        if (filterValues.year) {
            api = api + '&launch_year=' + filterValues.year;
        }
        if (filterValues.launch) {
            api = api + '&launch_success=' + filterValues.launch;
        }
        if (filterValues.landing) {
            api = api + '&land_success=' + filterValues.landing;
        }
        return api;
    }

    const onClickYears = (value) => {
        setFilterValues({ ...filterValues, year: value.toString() });
        setLaunchYears(launchYears.map(x => { return x.value === value ? { value: x.value, class: 'button-bg-color' } : { value: x.value, class: '' } }))
    }

    const onClickLaunchOrLanding = (isLaunch, bool) => {
        if (isLaunch) {
            setFilterValues({ ...filterValues, launch: bool.toString() });
            setLaunchClasses(bool ? ['button-bg-color', ''] : ['', 'button-bg-color']);
        } else {
            setFilterValues({ ...filterValues, landing: bool.toString() });
            setLandingClasses(bool ? ['button-bg-color', ''] : ['', 'button-bg-color']);
        }
    }
    return (
        <div className='filter-container'>
            <p><strong>Filters</strong></p>
            <p className='filter-border-bottom'>Launch Year</p>
            <Grid container spacing={1}>
                {launchYears.map(year => {
                    return <Grid key={year.value} item item xs={4} sm={6} md={4}>
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

FilterPanel.propTypes = {
    setSpaceXdata: PropTypes.func,
    setError: PropTypes.func
};