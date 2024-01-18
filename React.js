import React, { Component } from 'react';
import Select from 'react-styled-select';
import { RangeSlider } from 'reactrangeslider';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

class Filter extends Component {
    constructor(){
        super();

        this.state = {
            sliderMin: 0,
            sliderMax: 10000,
            filterOpened: false,
            startDate: moment()
        };
    }

    onChange(val){
        this.setState({
            sliderMin: val.start,
            sliderMax: val.end
        })
    }

    handleDateStart(date){
        this.setState({
            startDate: date
        })
    }

    handleDateEnd(date){
        this.setState({
            endDate: date
        })
    }

    toggleFilter(e){
        e.preventDefault();
        this.setState({
            filterOpened: !this.state.filterOpened
        })
    }

    render(){
        const classesTitlebar = {
            selectArrow: 'calendar__filter__titlebar__select__arrow',
            selectPlaceholder: 'calendar__filter__titlebar__select__placeholder',
            selectControl: 'calendar__filter__titlebar__select__control',
            selectArrowZone: 'calendar__filter__titlebar__select__arrow__zone'
        };

        const classes = {
            selectArrow: 'calendar__filter__select__arrow',
            selectPlaceholder: 'calendar__filter__select__placeholder',
            selectControl: 'calendar__filter__select__control',
            selectArrowZone: 'calendar__filter__select__arrow__zone'
        };

        return (
            <div className="calendar__filter">
                <div className="container">
                    <div className="calendar__filter__titlebar">
                        <div className="calendar__filter__titlebar__options">
                            <Select
                                placeholder="datum"
                                className='calendar__filter__titlebar__select'
                                classes={ classesTitlebar }
                            />
                            <Select
                                placeholder="cena"
                                className='calendar__filter__titlebar__select'
                                classes={ classesTitlebar }
                            />
                        </div>

                        <div className={ this.state.filterOpened ? 'calendar__filter__titlebar__toggle rotated' : 'calendar__filter__titlebar__toggle'}>
                            <NavLink to="#" onClick={this.toggleFilter.bind(this)}>Nastavit filtry</NavLink>
                        </div>
                    </div>

                    <div className={this.state.filterOpened ? 'calendar__filter__content opened' : 'calendar__filter__content'}>
                        <div className="calendar__filter__section">
                            <div className="calendar__filter__section__title">
                                <p>Kategorie:</p>
                            </div>

                            <div className="calendar__filter__section__list">
                                <div className="calendar__filter__section__item calendar__filter__section__item--checkbox">
                                    <input type="checkbox" id="zacatecniky" />
                                    <label htmlFor="zacatecniky">pro začátečníky</label>
                                </div>

                                <div className="calendar__filter__section__item calendar__filter__section__item--checkbox">
                                    <input type="checkbox" id="all" />
                                    <label htmlFor="all">pro začátečníky</label>
                                </div>

                                <div className="calendar__filter__section__item calendar__filter__section__item--checkbox">
                                    <input type="checkbox" id="another" />
                                    <label htmlFor="another">ostatní akce</label>
                                </div>
                            </div>
                        </div>

                        <div className="calendar__filter__section">
                            <div className="calendar__filter__section__title">
                                <p>Hřiště:</p>
                            </div>

                            <div className="calendar__filter__section__list">
                                <div className="calendar__filter__section__item calendar__filter__section__item--checkbox">
                                    <input type="checkbox" id="hajek" />
                                    <label htmlFor="hajek">1- Kasárny Hájek</label>
                                </div>

                                <div className="calendar__filter__section__item calendar__filter__section__item--checkbox">
                                    <input type="checkbox" id="letna" />
                                    <label htmlFor="letna">2- Sportovní Hala Letná</label>
                                </div>

                                <div className="calendar__filter__section__item calendar__filter__section__item--checkbox">
                                    <input type="checkbox" id="bratronice" />
                                    <label htmlFor="bratronice">3- Raketová základna Bratronice</label>
                                </div>

                                <div className="calendar__filter__section__item calendar__filter__section__item--checkbox">
                                    <input type="checkbox" id="klecany" />
                                    <label htmlFor="klecany">4 - Kasárna Klecany</label>
                                </div>

                                <div className="calendar__filter__section__item calendar__filter__section__item--checkbox">
                                    <input type="checkbox" id="ostatní" />
                                    <label htmlFor="ostatní">ostatní</label>
                                </div>
                            </div>
                        </div>

                        <div className="calendar__filter__section">
                            <div className="calendar__filter__section__title">
                                <p>Termín:</p>
                            </div>

                            <div className="calendar__filter__section__list">
                                <div className="calendar__filter__section__item calendar__filter__section__item--date">
                                    <label htmlFor="from">od:</label>
                                    {/*<DatePicker*/}

                                        {/*selectsStart*/}
                                        {/*startDate={this.state.startDate}*/}
                                        {/*endDate={this.state.endDate}*/}
                                        {/*selected={this.state.startDate}*/}
                                        {/*onChange={this.handleDateStart.bind(this)}*/}
                                    {/*/>*/}
                                </div>

                                <div className="calendar__filter__section__item calendar__filter__section__item--date">
                                    <label htmlFor="to">do:</label>
                                    {/*<DatePicker*/}

                                        {/*selectsEnd*/}
                                        {/*startDate={this.state.startDate}*/}
                                        {/*endDate={this.state.endDate}*/}
                                        {/*selected={this.state.startDate}*/}
                                        {/*//onChange={this.handleDateEnd.bind(this)}*/}
                                    {/*/>*/}
                                </div>
                            </div>
                        </div>

                        <div className="calendar__filter__section">
                            <div className="calendar__filter__section__title">
                                <p>Cena:</p>
                            </div>

                            <div className="calendar__filter__section__list">
                                <div className="calendar__filter__section__item calendar__filter__section__item--slider">
                                    <p className='rangeslider__min'>{this.state.sliderMin}</p>
                                    <RangeSlider
                                        step={1}
                                        min={0}
                                        max={10000}
                                        onChange={this.onChange.bind(this) }
                                        trackClassName='rangeslider__track'
                                        highlightedTrackClassName='rangeslider__track--highlighted'
                                        handleClassName='rangeslider__handle'
                                    />
                                    <p className='rangeslider__max'>{this.state.sliderMax}</p>
                                </div>
                            </div>
                        </div>

                        <div className="calendar__filter__section">
                            <div className="calendar__filter__section__title">
                                <p>Lorem ipsum:</p>
                            </div>

                            <div className="calendar__filter__section__list">
                                <div className="calendar__filter__section__item calendar__filter__section__item--select">
                                    <Select
                                        placeholder="Select"
                                        className='calendar__filter__select'
                                        classes={classes}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className='calendar__filter__close'>
                            <NavLink to="#" onClick={this.toggleFilter.bind(this)}>Zrušit filtr</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;
