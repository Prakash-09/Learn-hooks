import React from "react";
import Switch from "react-switch";
import Select from "react-select";
import Infotip from './Infotip';
import CreatableSelect from 'react-select/creatable';
// import StudioKeyMap from './StudioKeyMap';
// import StudioTags from './StudioTags';

export function inputLabel(label, className, style) {
    return <label className={`${className || ''} ${style.label || ''}`}>{label}
        {style.required && <sup className='ml-1 align-middle text-danger'>*</sup>}
        {style.help && <Infotip title={style.help}>
            <span className='ml-1 align-top feather icon-help-circle text-dark small' /></Infotip>}
    </label>
}
export function inputField(type, name, label, value, onChange, style, selectOptions, id) {
    if ('checkbox' === type.toLowerCase()) {
        return <div className={`form-group studio ${style.container || ''}`}>
            {label && style.checkboxLabelBefore && inputLabel(label, 'text-capitalize p-0 m-0 mb-0', style)}
            <input id={id} type={type} name={name} checked={value || false}
                className={`${style.input || ''}`}
                disabled={style.disabled} readOnly={style.readOnly}
                onChange={(e) => onChange(name, e.target.checked)} />
            {label && !style.checkboxLabelBefore && inputLabel(label, 'text-capitalize p-0 m-0 mb-0', style)}
        </div>
    } else if ('switch' === type.toLowerCase()) {
        let switchWidth = style.switchWidth || style.switchHeight || 28;

        return <div className={`form-group studio ${style.container || ''}`}>
            {label && inputLabel(label, 'text-capitalize p-0 mr-3 mb-0 w-auto', style)}
            <div className={`studio-switch ${style.input || ''}`} >
                <Switch className='react-switch'
                    id={id}
                    checked={value || false}
                    onChange={(checked) => onChange(name, checked)}
                    onColor="#0e90ff"
                    disabled={style.disabled || false}
                    height={style.switchHeight || 28}
                    width={(switchWidth * 2)}
                    handleDiameter={(style.switchHeight || 28) - 5}
                    checkedIcon={style.switchTextOn ? getSwitchIconText(style.switchTextOn) : false}
                    uncheckedIcon={style.switchTextOff ? getSwitchIconText(style.switchTextOff) : false}
                />
            </div>
        </div>
    } else if ('select' === type.toLowerCase() && style.selectCreatable) {
        return <div className={`form-group studio${((style.selectMultiple || style.selectSearchable) ? '-custom' : '')} ${style.container || ''}`}>
            {label && inputLabel(label, 'text-capitalize mb-1', style)}
            {style.selectMultiple &&
                <CreatableSelect
                    id={id} name={name}
                    value={value && selectOptions.filter(option => value.indexOf(option.value) >= 0)}
                    options={selectOptions}
                    className={`${style.input ? (style.input + ' select-studio') : 'select-studio'}`}
                    classNamePrefix={'select-studio'}
                    isDisabled={style.disabled || false}
                    isSearchable={true}
                    isMulti={style.selectMultiple || false}
                    onChange={(selectedOption) => onChange(name, selectedOption ? selectedOption.map(option => option.value) : [])}
                    onCreateOption={(selectedOption) => onChange(name, selectedOption ? selectedOption.map(option => option.value) : [])}
                />
            }
            {!style.selectMultiple &&
                <CreatableSelect
                    id={id} name={name}
                    value={selectOptions.filter(option => option.value === value)}
                    options={selectOptions}
                    className={`${style.input ? (style.input + ' select-studio') : 'select-studio'}`}
                    classNamePrefix={'select-studio'}
                    isDisabled={style.disabled || false}
                    isSearchable={true}
                    onChange={(selectedOption) => onChange(name, selectedOption.value)}
                    onCreateOption={(newOptionValue) => onChange(name, newOptionValue)}
                />
            }
        </div>
    } else if ('select' === type.toLowerCase()) {
        return <div className={`form-group studio${((style.selectMultiple || style.selectSearchable) ? '-custom' : '')} ${style.container || ''}`}>
            {label && inputLabel(label, 'text-capitalize mb-1', style)}
            {style.selectMultiple &&
                <Select
                    id={id} name={name}
                    value={value && selectOptions.filter(option => value.indexOf(option.value) >= 0)}
                    options={selectOptions}
                    className={`${style.input ? (style.input + ' select-studio') : 'select-studio'}`}
                    classNamePrefix={'select-studio'}
                    isDisabled={style.disabled || false}
                    isSearchable={true}
                    isMulti={style.selectMultiple || false}
                    onChange={(selectedOption) => onChange(name, selectedOption ? selectedOption.map(option => option.value) : [])}
                />
            }
            {!style.selectMultiple && style.selectSearchable &&
                <Select
                    id={id} name={name}
                    value={selectOptions.filter(option => option.value === value)}
                    options={selectOptions}
                    className={`${style.input ? (style.input + ' select-studio') : 'select-studio'}`}
                    classNamePrefix={'select-studio'}
                    isDisabled={style.disabled || false}
                    isSearchable={true}
                    onChange={(selectedOption) => onChange(name, selectedOption.value)}
                />
            }
            {!(style.selectMultiple || style.selectSearchable) &&
                <select id={id} name={name} value={value || ''}
                    className={`${style.input || ''}`}
                    disabled={style.disabled || false}
                    onChange={(e) => onChange(name, e.target.value)}
                >
                    {selectOptions && selectOptions.map((selectOption, selectIndex) =>
                        <option key={selectIndex} value={selectOption.value}>{selectOption.label}</option>
                    )}
                </select>
            }
        </div>
    } 
    // else if ('keymap' === type.toLowerCase()) {
    //     return <StudioKeyMap name={name} label={label} value={value} onChange={onChange} style={style} id={id} />
    // } 
    // else if ('tags' === type.toLowerCase()) {
    //     return <StudioTags name={name} label={label} value={value} onChange={onChange} style={style} id={id} />
    // } 
    else if ('textarea' === type.toLowerCase()) {
        return <div className={`form-group studio ${style.container || ''}`}>
            {label && inputLabel(label, 'text-capitalize mb-1', style)}
            <textarea id={id} name={name} value={value || ''}
                className={`form-control ${style.input || ''}`}
                placeholder={label ? undefined : style.placeholder}
                rows={style.rows || style.textareaRows || 3} cols={style.cols || style.textareaCols}
                maxLength={style.maxLength}
                disabled={style.disabled} readOnly={style.readOnly} required={style.required}
                autoFocus={style.autoFocus}
                onChange={(e) => onChange(name, e.target.value)} />
        </div>
    } else if ('password' === type.toLowerCase()) {
        let toggleId = id || generateUUID();
        return <div className={`form-group studio password-container ${style.container || ''}`}>
            {label && inputLabel(label, 'text-capitalize mb-1', style)}
            <input id={toggleId} type={type} name={name} value={value || ''}
                className={`form-control ${style.input || ''}`}
                placeholder={label ? undefined : style.placeholder}
                size={style.size} maxLength={style.maxLength} pattern={style.pattern}
                disabled={style.disabled} readOnly={style.readOnly} required={style.required}
                autoFocus={style.autoFocus}
                onChange={(e) => onChange(name, e.target.value)} />
            <span id={toggleId + '-toggle'} className="password-toggle feather icon-eye" title='Show Password'
                onClick={() => { togglePassword(toggleId) }} />
        </div>
    } else {
        return <div className={`form-group studio ${style.container || ''}`}>
            {label && inputLabel(label, 'text-capitalize mb-1', style)}
            <input id={id} type={type} name={name} value={'file' === type.toLowerCase() ? undefined : (value || '')}
                className={`form-control ${style.input || ''}`}
                placeholder={label ? undefined : style.placeholder}
                checked={style.checked}
                accept={style.accept}
                min={style.min} max={style.max} step={style.step}
                size={style.size} maxLength={style.maxLength} pattern={style.pattern}
                disabled={style.disabled} readOnly={style.readOnly} required={style.required}
                autoFocus={style.autoFocus} multiple={style.multiple}
                onChange={(e) => onChange(name, 'file' === type.toLowerCase() ? e.target.files : 'number' === type.toLowerCase() ? (e.target.value * 1) : e.target.value)} />
        </div>
    }
}

function getSwitchIconText(text) {
    return <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            color: "#fff",
            fontSize: '90%',
            textTransform: 'uppercase'
        }}
    >{text}</div>
}

function togglePassword(toggleId) {
    let userPassword = document.getElementById(toggleId);
    let userPasswordToggle = document.getElementById(toggleId + '-toggle');
    if (userPassword && userPasswordToggle && userPassword.type === 'password') {
        userPassword.type = 'text';
        userPasswordToggle.className = 'password-toggle feather icon-eye-off';
        userPasswordToggle.title = 'Hide Password'
    } else if (userPassword && userPasswordToggle && userPassword.type === 'text') {
        userPassword.type = 'password';
        userPasswordToggle.className = 'password-toggle feather icon-eye';
        userPasswordToggle.title = 'Show Password'
    }
}

export function generateUUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });
    return uuid;
}