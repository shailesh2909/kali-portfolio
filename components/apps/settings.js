// File refreshed
import React, { Component } from 'react';

export class Settings extends Component {
    constructor(props) {
        super(props);
        this.instanceId = Math.random().toString(36).substr(2, 9);
        this.state = {
            activeCategory: 'appearance',
            theme: 'dark',
            accentColor: 'blue',
            // WiFi settings
            wifiEnabled: true,
            selectedWifi: 'Home_Network',
            // Bluetooth
            bluetoothEnabled: false,
            // Display
            resolution: '1920 × 1080 (16:9)',
            refreshRate: '60 Hz',
            orientation: 'Landscape',
            nightLight: false,
            // Sound
            outputVolume: 75,
            inputVolume: 50,
            alertSound: true,
            // Power
            autoSuspend: true,
            dimScreen: true,
            suspendTime: '15 minutes',
            powerButton: 'Suspend',
            // Keyboard
            repeatKeys: true,
            keyRepeatSpeed: 50,
            keyRepeatDelay: 30,
            // Mouse
            mouseSpeed: 50,
            naturalScrolling: false,
            touchpadEnabled: true,
            tapToClick: true,
            twoFingerScroll: true,
            // Users
            fullName: 'Kali Linux',
            email: '',
            autoLogin: false,
            // DateTime
            autoDateTime: true,
            autoTimeZone: true,
            timeZone: 'America/New_York',
            timeFormat: '24-hour',
        };
    }

    componentDidMount() {
        console.log(`[${this.instanceId}] Settings mounted with props:`, this.props);
        console.log(`[${this.instanceId}] changeBackgroundImage function:`, this.props.changeBackgroundImage);
        console.log(`[${this.instanceId}] Current background:`, this.props.currBgImgName);
    }

    setActiveCategory = (category) => {
        console.log('Category clicked:', category);
        this.setState({ activeCategory: category }, () => {
            console.log('Active category now:', this.state.activeCategory);
        });
    }

    toggleSetting = (settingName) => {
        console.log(`[${this.instanceId}] Toggle clicked:`, settingName, 'Current value:', this.state[settingName]);
        this.setState(prevState => ({
            [settingName]: !prevState[settingName]
        }), () => {
            console.log(`[${this.instanceId}] New value:`, this.state[settingName]);
            this.forceUpdate();
        });
    }

    updateSetting = (settingName, value) => {
        console.log('Update setting:', settingName, 'to:', value);
        this.setState({ [settingName]: value }, () => {
            console.log('Updated:', this.state[settingName]);
        });
    }

    changeWallpaper = (wallpaperName) => {
        console.log('Changing wallpaper to:', wallpaperName);
        console.log('Props:', this.props);
        if (this.props.changeBackgroundImage) {
            this.props.changeBackgroundImage(wallpaperName);
            console.log('Wallpaper changed!');
        } else {
            console.error('changeBackgroundImage function not found in props');
        }
    }

    renderCategoryContent = () => {
        const { activeCategory } = this.state;

        switch (activeCategory) {
            case 'appearance':
                return this.renderAppearance();
            case 'display':
                return this.renderDisplay();
            case 'network':
                return this.renderNetwork();
            case 'wifi':
                return this.renderWiFi();
            case 'bluetooth':
                return this.renderBluetooth();
            case 'sound':
                return this.renderSound();
            case 'power':
                return this.renderPower();
            case 'users':
                return this.renderUsers();
            case 'about':
                return this.renderAbout();
            default:
                return this.renderAppearance();
        }
    }

    renderAppearance = () => {
        const wallpapers = {
            "wall-1": "./images/wallpapers/wall-1.webp",
            "wall-2": "./images/wallpapers/wall-2.webp",
            "wall-3": "./images/wallpapers/wall-3.webp",
            "wall-4": "./images/wallpapers/wall-4.webp",
            "wall-5": "./images/wallpapers/wall-5.webp",
            "wall-6": "./images/wallpapers/wall-6.webp",
            "wall-7": "./images/wallpapers/wall-7.webp",
            "wall-8": "./images/wallpapers/wall-8.webp",
        };

        return (
            <div style={styles.contentPanel}>
                <h2 style={styles.panelTitle}>Appearance</h2>
                
                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Background</h3>
                    <div style={styles.wallpaperGrid}>
                        {Object.keys(wallpapers).map((name) => (
                            <div
                                key={name}
                                style={{
                                    ...styles.wallpaperItem,
                                    backgroundImage: `url(${wallpapers[name]})`,
                                    border: this.props.currBgImgName === name ? '3px solid #367bf0' : '3px solid #3a3a3a',
                                    cursor: 'pointer',
                                    transform: 'scale(1)',
                                    transition: 'all 0.2s ease',
                                }}
                                onClick={(e) => {
                                    console.log('Clicked on wallpaper:', name);
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.changeWallpaper(name);
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    renderDisplay = () => (
        <div style={styles.contentPanel}>
            <h2 style={styles.panelTitle}>Display</h2>
            
            <div style={styles.section}>
                <div style={styles.displayPreview}>
                    <div style={styles.monitorIcon}></div>
                    <span style={styles.displayName}>Built-in Display</span>
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.settingsRow}>
                    <span style={styles.label}>Resolution</span>
                    <select 
                        style={styles.select} 
                        value={this.state.resolution}
                        onChange={(e) => this.updateSetting('resolution', e.target.value)}
                    >
                        <option>1920 × 1080 (16:9)</option>
                        <option>1680 × 1050 (16:10)</option>
                        <option>1440 × 900 (16:10)</option>
                        <option>1366 × 768 (16:9)</option>
                    </select>
                </div>
                
                <div style={styles.settingsRow}>
                    <span style={styles.label}>Refresh Rate</span>
                    <select 
                        style={styles.select}
                        value={this.state.refreshRate}
                        onChange={(e) => this.updateSetting('refreshRate', e.target.value)}
                    >
                        <option>60 Hz</option>
                        <option>59.94 Hz</option>
                        <option>75 Hz</option>
                        <option>144 Hz</option>
                    </select>
                </div>

                <div style={styles.settingsRow}>
                    <span style={styles.label}>Orientation</span>
                    <select 
                        style={styles.select}
                        value={this.state.orientation}
                        onChange={(e) => this.updateSetting('orientation', e.target.value)}
                    >
                        <option>Landscape</option>
                        <option>Portrait</option>
                        <option>Landscape (flipped)</option>
                        <option>Portrait (flipped)</option>
                    </select>
                </div>

                <div key={`nightlight-row-${this.state.nightLight}`} style={styles.settingsRow}>
                    <span style={styles.label}>Night Light</span>
                    <label style={styles.toggle} onClick={() => this.toggleSetting('nightLight')}>
                        <input type="checkbox" checked={this.state.nightLight} onChange={() => {}} style={{display: 'none'}} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: this.state.nightLight ? 'rgb(54, 123, 240)' : 'rgb(74, 74, 74)',
                            borderRadius: '24px',
                            transition: 'all 0.3s ease',
                            pointerEvents: 'none',
                        }}>
                            <div style={{
                                position: 'absolute',
                                height: '18px',
                                width: '18px',
                                left: this.state.nightLight ? '27px' : '3px',
                                bottom: '3px',
                                backgroundColor: 'rgb(255, 255, 255)',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                pointerEvents: 'none',
                            }}></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );

    renderNetwork = () => (
        <div style={styles.contentPanel}>
            <h2 style={styles.panelTitle}>Network</h2>
            
            <div style={styles.section}>
                <div style={styles.networkDevice}>
                    <div style={styles.networkHeader}>
                        <div style={styles.networkIcon}>🔌</div>
                        <div>
                            <div style={styles.networkName}>Wired Connection</div>
                            <div style={{...styles.networkStatus, color: '#46a546'}}>Connected</div>
                        </div>
                    </div>
                    <div style={styles.networkDetails}>
                        <div style={styles.networkRow}>
                            <span>IPv4 Address</span>
                            <span>192.168.1.100</span>
                        </div>
                        <div style={styles.networkRow}>
                            <span>Hardware Address</span>
                            <span>00:1A:2B:3C:4D:5E</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderWiFi = () => {
        const networks = [
            { name: 'Home_Network', signal: 'strong', secure: false },
            { name: 'TP-Link_5G', signal: 'strong', secure: true },
            { name: 'Office_Guest', signal: 'medium', secure: true },
            { name: 'CoffeeShop_Free', signal: 'weak', secure: false },
        ];

        return (
            <div style={styles.contentPanel}>
                <h2 style={styles.panelTitle}>Wi-Fi</h2>
                
                <div style={styles.section}>
                    <div key={`wifi-row-${this.state.wifiEnabled}`} style={styles.settingsRow}>
                        <span style={styles.label}>Wi-Fi</span>
                        <label style={styles.toggle} onClick={() => this.toggleSetting('wifiEnabled')}>
                            <input type="checkbox" checked={this.state.wifiEnabled} onChange={() => {}} style={{display: 'none'}} />
                            <div 
                                key={`wifi-bg-${this.state.wifiEnabled}`}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: this.state.wifiEnabled ? 'rgb(54, 123, 240)' : 'rgb(74, 74, 74)',
                                    borderRadius: '24px',
                                    transition: 'all 0.3s ease',
                                    pointerEvents: 'none',
                                }}>
                                <div 
                                    key={`wifi-knob-${this.state.wifiEnabled}`}
                                    style={{
                                        position: 'absolute',
                                        height: '18px',
                                        width: '18px',
                                        left: this.state.wifiEnabled ? '27px' : '3px',
                                        bottom: '3px',
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        borderRadius: '50%',
                                        transition: 'all 0.3s ease',
                                        pointerEvents: 'none',
                                    }}></div>
                            </div>
                        </label>
                    </div>
                </div>

                {this.state.wifiEnabled && (
                    <div style={styles.section}>
                        <h3 style={styles.sectionTitle}>Visible Networks</h3>
                        <div style={styles.wifiList}>
                            {networks.map((network) => (
                                <div 
                                    key={network.name}
                                    style={{
                                        ...styles.wifiItem, 
                                        background: this.state.selectedWifi === network.name ? '#2e3a52' : '#242424',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => this.updateSetting('selectedWifi', network.name)}
                                >
                                    <span style={styles.wifiIcon}>📶</span>
                                    <span style={styles.wifiName}>{network.name}</span>
                                    {this.state.selectedWifi === network.name && (
                                        <span style={styles.wifiBadge}>Connected</span>
                                    )}
                                    {network.secure && <span>🔒</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    renderBluetooth = () => {
        console.log('renderBluetooth called, bluetoothEnabled:', this.state.bluetoothEnabled);
        return (
        <div style={styles.contentPanel}>
            <h2 style={styles.panelTitle}>Bluetooth</h2>
            
            <div style={styles.section}>
                <div key={`bluetooth-row-${this.state.bluetoothEnabled}`} style={styles.settingsRow}>
                    <span style={styles.label}>Bluetooth</span>
                    <label style={styles.toggle} onClick={() => this.toggleSetting('bluetoothEnabled')}>
                        <input type="checkbox" checked={this.state.bluetoothEnabled} onChange={() => {}} style={{display: 'none'}} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: this.state.bluetoothEnabled ? 'rgb(54, 123, 240)' : 'rgb(74, 74, 74)',
                            borderRadius: '24px',
                            transition: 'all 0.3s ease',
                            pointerEvents: 'none',
                        }}>
                            <div style={{
                                position: 'absolute',
                                height: '18px',
                                width: '18px',
                                left: this.state.bluetoothEnabled ? '27px' : '3px',
                                bottom: '3px',
                                backgroundColor: 'rgb(255, 255, 255)',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                pointerEvents: 'none',
                            }}></div>
                        </div>
                    </label>
                    <span style={{marginLeft: '10px', color: '#888', fontSize: '12px'}}>
                        {this.state.bluetoothEnabled ? 'ON' : 'OFF'}
                    </span>
                </div>
            </div>

            {!this.state.bluetoothEnabled && (
                <div style={styles.section}>
                    <p style={styles.infoText}>Turn on Bluetooth to connect to devices</p>
                </div>
            )}

            {this.state.bluetoothEnabled && (
                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Available Devices</h3>
                    <p style={styles.infoText}>Searching for devices...</p>
                </div>
            )}
        </div>
        );
    }

    renderSound = () => (
        <div style={styles.contentPanel}>
            <h2 style={styles.panelTitle}>Sound</h2>
            
            <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Output</h3>
                <div style={styles.settingsRow}>
                    <span style={styles.label}>Output Volume</span>
                    <input 
                        type="range" 
                        style={styles.slider} 
                        value={this.state.outputVolume}
                        onChange={(e) => this.updateSetting('outputVolume', e.target.value)}
                        min="0"
                        max="100"
                    />
                    <span style={{color: '#a0a0a0', marginLeft: '12px', minWidth: '40px'}}>{this.state.outputVolume}%</span>
                </div>
            </div>

            <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Input</h3>
                <div style={styles.settingsRow}>
                    <span style={styles.label}>Input Volume</span>
                    <input 
                        type="range" 
                        style={styles.slider} 
                        value={this.state.inputVolume}
                        onChange={(e) => this.updateSetting('inputVolume', e.target.value)}
                        min="0"
                        max="100"
                    />
                    <span style={{color: '#a0a0a0', marginLeft: '12px', minWidth: '40px'}}>{this.state.inputVolume}%</span>
                </div>
            </div>

            <div style={styles.section}>
                <h3 style={styles.sectionTitle}>System Sounds</h3>
                <div key={`alert-row-${this.state.alertSound}`} style={styles.settingsRow}>
                    <span style={styles.label}>Alert Sound</span>
                    <label style={styles.toggle} onClick={() => this.toggleSetting('alertSound')}>
                        <input type="checkbox" checked={this.state.alertSound} onChange={() => {}} style={{display: 'none'}} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: this.state.alertSound ? 'rgb(54, 123, 240)' : 'rgb(74, 74, 74)',
                            borderRadius: '24px',
                            transition: 'all 0.3s ease',
                            pointerEvents: 'none',
                        }}>
                            <div style={{
                                position: 'absolute',
                                height: '18px',
                                width: '18px',
                                left: this.state.alertSound ? '27px' : '3px',
                                bottom: '3px',
                                backgroundColor: 'rgb(255, 255, 255)',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                pointerEvents: 'none',
                            }}></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );

    renderPower = () => (
        <div style={styles.contentPanel}>
            <h2 style={styles.panelTitle}>Power</h2>
            
            <div style={styles.section}>
                <div style={styles.powerStatus}>
                    <div style={styles.batteryIcon}></div>
                    <div>
                        <div style={styles.powerPercent}>87%</div>
                        <div style={styles.powerState}>Battery charging</div>
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Power Saving</h3>
                <div key={`autosuspend-row-${this.state.autoSuspend}`} style={styles.settingsRow}>
                    <span style={styles.label}>Automatic Suspend</span>
                    <label style={styles.toggle} onClick={() => this.toggleSetting('autoSuspend')}>
                        <input type="checkbox" checked={this.state.autoSuspend} onChange={() => {}} style={{display: 'none'}} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: this.state.autoSuspend ? 'rgb(54, 123, 240)' : 'rgb(74, 74, 74)',
                            borderRadius: '24px',
                            transition: 'all 0.3s ease',
                            pointerEvents: 'none',
                        }}>
                            <div style={{
                                position: 'absolute',
                                height: '18px',
                                width: '18px',
                                left: this.state.autoSuspend ? '27px' : '3px',
                                bottom: '3px',
                                backgroundColor: 'rgb(255, 255, 255)',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                pointerEvents: 'none',
                            }}></div>
                        </div>
                    </label>
                </div>
                <div key={`dimscreen-row-${this.state.dimScreen}`} style={styles.settingsRow}>
                    <span style={styles.label}>Dim Screen</span>
                    <label style={styles.toggle} onClick={() => this.toggleSetting('dimScreen')}>
                        <input type="checkbox" checked={this.state.dimScreen} onChange={() => {}} style={{display: 'none'}} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: this.state.dimScreen ? 'rgb(54, 123, 240)' : 'rgb(74, 74, 74)',
                            borderRadius: '24px',
                            transition: 'all 0.3s ease',
                            pointerEvents: 'none',
                        }}>
                            <div style={{
                                position: 'absolute',
                                height: '18px',
                                width: '18px',
                                left: this.state.dimScreen ? '27px' : '3px',
                                bottom: '3px',
                                backgroundColor: 'rgb(255, 255, 255)',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                pointerEvents: 'none',
                            }}></div>
                        </div>
                    </label>
                </div>
            </div>

            <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Suspend & Power Button</h3>
                <div style={styles.settingsRow}>
                    <span style={styles.label}>Automatic Suspend</span>
                    <select 
                        style={styles.select}
                        value={this.state.suspendTime}
                        onChange={(e) => this.updateSetting('suspendTime', e.target.value)}
                    >
                        <option>15 minutes</option>
                        <option>20 minutes</option>
                        <option>30 minutes</option>
                        <option>Never</option>
                    </select>
                </div>
                <div style={styles.settingsRow}>
                    <span style={styles.label}>When Power Button Is Pressed</span>
                    <select 
                        style={styles.select}
                        value={this.state.powerButton}
                        onChange={(e) => this.updateSetting('powerButton', e.target.value)}
                    >
                        <option>Suspend</option>
                        <option>Power Off</option>
                        <option>Nothing</option>
                    </select>
                </div>
            </div>
        </div>
    );

    renderUsers = () => (
        <div style={styles.contentPanel}>
            <h2 style={styles.panelTitle}>Users</h2>
            
            <div style={styles.section}>
                <div style={styles.userProfile}>
                    <div style={styles.userAvatar}>👤</div>
                    <div>
                        <h3 style={styles.userName}>kali</h3>
                        <span style={styles.userRole}>Administrator</span>
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.settingsRow}>
                    <span style={styles.label}>Full Name</span>
                    <input 
                        type="text" 
                        style={styles.input} 
                        value={this.state.fullName}
                        onChange={(e) => this.updateSetting('fullName', e.target.value)}
                    />
                </div>
                <div style={styles.settingsRow}>
                    <span style={styles.label}>Email</span>
                    <input 
                        type="text" 
                        style={styles.input} 
                        value={this.state.email}
                        onChange={(e) => this.updateSetting('email', e.target.value)}
                        placeholder="user@example.com"
                    />
                </div>
            </div>

            <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Password</h3>
                <button 
                    style={styles.button}
                    onClick={() => alert('Password change dialog would open here')}
                >Change Password</button>
            </div>

            <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Automatic Login</h3>
                <div key={`autologin-row-${this.state.autoLogin}`} style={styles.settingsRow}>
                    <span style={styles.label}>Automatic Login</span>
                    <label style={styles.toggle} onClick={() => this.toggleSetting('autoLogin')}>
                        <input type="checkbox" checked={this.state.autoLogin} onChange={() => {}} style={{display: 'none'}} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: this.state.autoLogin ? 'rgb(54, 123, 240)' : 'rgb(74, 74, 74)',
                            borderRadius: '24px',
                            transition: 'all 0.3s ease',
                            pointerEvents: 'none',
                        }}>
                            <div style={{
                                position: 'absolute',
                                height: '18px',
                                width: '18px',
                                left: this.state.autoLogin ? '27px' : '3px',
                                bottom: '3px',
                                backgroundColor: 'rgb(255, 255, 255)',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                pointerEvents: 'none',
                            }}></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );

    renderAbout = () => (
        <div style={styles.contentPanel}>
            <h2 style={styles.panelTitle}>About</h2>
            
            <div style={styles.section}>
                <div style={styles.aboutLogo}>
                    <h3 style={styles.aboutTitle}>Kali Linux</h3>
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.aboutGrid}>
                    <div style={styles.aboutRow}>
                        <span style={styles.aboutLabel}>Device Name</span>
                        <span style={styles.aboutValue}>kali-linux</span>
                    </div>
                    <div style={styles.aboutRow}>
                        <span style={styles.aboutLabel}>OS Version</span>
                        <span style={styles.aboutValue}>Kali Linux Rolling (2023.4)</span>
                    </div>
                    <div style={styles.aboutRow}>
                        <span style={styles.aboutLabel}>GNOME Version</span>
                        <span style={styles.aboutValue}>45.0</span>
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Hardware</h3>
                <div style={styles.aboutGrid}>
                    <div style={styles.aboutRow}>
                        <span style={styles.aboutLabel}>Memory</span>
                        <span style={styles.aboutValue}>16.0 GB</span>
                    </div>
                    <div style={styles.aboutRow}>
                        <span style={styles.aboutLabel}>Processor</span>
                        <span style={styles.aboutValue}>Intel® Core™ i7-10750H × 12</span>
                    </div>
                    <div style={styles.aboutRow}>
                        <span style={styles.aboutLabel}>Graphics</span>
                        <span style={styles.aboutValue}>NVIDIA GeForce RTX 2060</span>
                    </div>
                </div>
            </div>
        </div>
    );

    render() {
        console.log(`[${this.instanceId}] === RENDER CALLED ===`, 'wifiEnabled:', this.state.wifiEnabled, 'bluetoothEnabled:', this.state.bluetoothEnabled);
        
        // Don't render if we don't have the changeBackgroundImage prop
        if (!this.props.changeBackgroundImage) {
            console.log(`[${this.instanceId}] NOT RENDERING - no props`);
            return null;
        }
        
        const { activeCategory } = this.state;

        const categories = [
            { id: 'wifi', icon: '📶', label: 'Wi-Fi' },
            { id: 'network', icon: '🌐', label: 'Network' },
            { id: 'bluetooth', icon: '🔵', label: 'Bluetooth' },
            { id: 'display', icon: '🖥️', label: 'Display' },
            { id: 'appearance', icon: '🎨', label: 'Appearance' },
            { id: 'sound', icon: '🔊', label: 'Sound' },
            { id: 'power', icon: '🔋', label: 'Power' },
            { id: 'users', icon: '👤', label: 'Users' },
            { id: 'about', icon: 'ℹ️', label: 'About' },
        ];

        return (
            <div style={styles.container} onClick={() => console.log('Container clicked!')}>
                <div style={styles.sidebar}>
                    {categories.map(category => (
                        <div
                            key={category.id}
                            style={{
                                ...styles.category,
                                ...(activeCategory === category.id ? styles.categoryActive : {})
                            }}
                            onClick={() => this.setActiveCategory(category.id)}
                        >
                            <span style={styles.categoryIcon}>{category.icon}</span>
                            <span>{category.label}</span>
                        </div>
                    ))}
                </div>

                <div style={styles.main}>
                    {this.renderCategoryContent()}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        background: '#242424',
        display: 'flex',
        fontFamily: "'Cantarell', 'Ubuntu', sans-serif",
        overflow: 'hidden',
    },
    sidebar: {
        width: '260px',
        background: '#2d2d2d',
        borderRight: '1px solid #1a1a1a',
        overflowY: 'auto',
        flexShrink: 0,
    },
    category: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        color: '#e0e0e0',
        cursor: 'pointer',
        transition: 'background 0.15s',
        borderLeft: '3px solid transparent',
        fontSize: '14px',
    },
    categoryActive: {
        background: '#383838',
        borderLeft: '3px solid #367bf0',
        color: '#fff',
    },
    categoryIcon: {
        marginRight: '12px',
        fontSize: '18px',
        width: '24px',
        textAlign: 'center',
    },
    main: {
        flex: 1,
        overflowY: 'auto',
        background: '#242424',
    },
    contentPanel: {
        padding: '32px 48px',
        maxWidth: '800px',
    },
    panelTitle: {
        fontSize: '28px',
        fontWeight: 600,
        color: '#fff',
        margin: '0 0 32px 0',
    },
    section: {
        background: '#2d2d2d',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
    },
    sectionTitle: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#a0a0a0',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        margin: '0 0 16px 0',
    },
    settingsRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderBottom: '1px solid #3a3a3a',
    },
    label: {
        color: '#e0e0e0',
        fontSize: '14px',
    },
    toggle: {
        position: 'relative',
        display: 'inline-block',
        width: '48px',
        height: '24px',
        cursor: 'pointer',
    },
    toggleSlider: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#4a4a4a',
        borderRadius: '24px',
        transition: '0.3s',
        pointerEvents: 'none',
    },
    toggleSliderOn: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#367bf0',
        borderRadius: '24px',
        pointerEvents: 'none',
    },
    toggleKnob: {
        position: 'absolute',
        content: '',
        height: '18px',
        width: '18px',
        left: '3px',
        bottom: '3px',
        background: 'white',
        borderRadius: '50%',
        transition: '0.3s',
        pointerEvents: 'none',
    },
    toggleKnobOn: {
        position: 'absolute',
        content: '',
        height: '18px',
        width: '18px',
        left: '27px',
        bottom: '3px',
        background: 'white',
        borderRadius: '50%',
        transition: '0.3s',
        pointerEvents: 'none',
    },
    select: {
        background: '#383838',
        color: '#e0e0e0',
        border: '1px solid #4a4a4a',
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '14px',
        outline: 'none',
        cursor: 'pointer',
        minWidth: '200px',
    },
    input: {
        background: '#383838',
        color: '#e0e0e0',
        border: '1px solid #4a4a4a',
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '14px',
        outline: 'none',
        minWidth: '300px',
    },
    slider: {
        width: '200px',
        height: '4px',
        borderRadius: '2px',
        background: '#4a4a4a',
        outline: 'none',
    },
    button: {
        background: '#383838',
        color: '#e0e0e0',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'background 0.15s',
    },
    wallpaperGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
    },
    wallpaperItem: {
        cursor: 'pointer',
        borderRadius: '8px',
        height: '100px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.2s ease',
        position: 'relative',
    },
    displayPreview: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px',
    },
    monitorIcon: {
        width: '120px',
        height: '80px',
        background: '#383838',
        borderRadius: '8px',
        border: '3px solid #4a4a4a',
        marginBottom: '16px',
    },
    displayName: {
        color: '#e0e0e0',
        fontSize: '14px',
    },
    networkDevice: {
        background: '#242424',
        borderRadius: '8px',
        padding: '16px',
    },
    networkHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
    },
    networkIcon: {
        fontSize: '32px',
        marginRight: '12px',
    },
    networkName: {
        color: '#fff',
        fontSize: '14px',
        fontWeight: 500,
    },
    networkStatus: {
        fontSize: '12px',
        color: '#a0a0a0',
    },
    networkDetails: {
        padding: '12px 0',
    },
    networkRow: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 0',
        fontSize: '13px',
        color: '#b0b0b0',
    },
    wifiList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    wifiItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
        background: '#242424',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    wifiIcon: {
        marginRight: '12px',
        fontSize: '18px',
    },
    wifiName: {
        flex: 1,
        color: '#e0e0e0',
        fontSize: '14px',
    },
    wifiBadge: {
        background: '#367bf0',
        color: '#fff',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '11px',
        marginLeft: '8px',
    },
    userProfile: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
    },
    userAvatar: {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        marginRight: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
    },
    userName: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: 500,
        margin: '0 0 4px 0',
    },
    userRole: {
        color: '#a0a0a0',
        fontSize: '13px',
    },
    aboutLogo: {
        textAlign: 'center',
        padding: '24px',
    },
    aboutTitle: {
        fontSize: '24px',
        fontWeight: 500,
        color: '#fff',
        margin: 0,
    },
    aboutGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '16px',
    },
    aboutRow: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderBottom: '1px solid #3a3a3a',
    },
    aboutLabel: {
        color: '#a0a0a0',
        fontSize: '14px',
    },
    aboutValue: {
        color: '#e0e0e0',
        fontSize: '14px',
        fontWeight: 500,
        textAlign: 'right',
    },
    powerStatus: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
    },
    batteryIcon: {
        width: '48px',
        height: '24px',
        border: '2px solid #46a546',
        borderRadius: '4px',
        position: 'relative',
        marginRight: '16px',
        background: 'linear-gradient(to right, #46a546 87%, transparent 87%)',
    },
    powerPercent: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: 500,
    },
    powerState: {
        color: '#a0a0a0',
        fontSize: '13px',
    },
    infoText: {
        color: '#a0a0a0',
        fontSize: '14px',
        textAlign: 'center',
        margin: 0,
    },
};

export default Settings;

export const displaySettings = () => {
    return <Settings />;
}
