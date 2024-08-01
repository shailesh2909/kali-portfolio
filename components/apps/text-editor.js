import React, { Component } from 'react';

export class TextEditor extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            filename: 'Untitled Document',
            lineCount: 1,
            modified: false,
            zoomLevel: 100,
            showFileMenu: false,
            showEditMenu: false,
            showSearchMenu: false,
            showViewMenu: false,
            showDocumentMenu: false,
            showToolsMenu: false,
            showHelpMenu: false
        }
    }

    componentDidMount() {
        // Check localStorage for filename and content
        const storedFilename = localStorage.getItem("text-editor-filename");
        const storedContent = localStorage.getItem("text-editor-content");
        
        if (storedFilename) {
            this.setState({ filename: storedFilename });
        } else if (this.props.filename) {
            this.setState({ filename: this.props.filename });
        }
        
        if (storedContent) {
            this.setState({ content: storedContent }, this.updateLineCount);
        } else if (this.props.content) {
            this.setState({ content: this.props.content }, this.updateLineCount);
        }
    }

    updateLineCount = () => {
        const lines = this.state.content.split('\n').length;
        this.setState({ lineCount: lines });
    }

    handleContentChange = (e) => {
        this.setState({ 
            content: e.target.value,
            modified: true 
        }, this.updateLineCount);
    }

    zoomIn = () => {
        this.setState(prevState => ({
            zoomLevel: Math.min(prevState.zoomLevel + 10, 200)
        }));
    }

    zoomOut = () => {
        this.setState(prevState => ({
            zoomLevel: Math.max(prevState.zoomLevel - 10, 50)
        }));
    }

    resetZoom = () => {
        this.setState({ zoomLevel: 100 });
    }

    toggleMenu = (menuName) => {
        this.setState(prevState => ({
            showFileMenu: menuName === 'file' ? !prevState.showFileMenu : false,
            showEditMenu: menuName === 'edit' ? !prevState.showEditMenu : false,
            showSearchMenu: menuName === 'search' ? !prevState.showSearchMenu : false,
            showViewMenu: menuName === 'view' ? !prevState.showViewMenu : false,
            showDocumentMenu: menuName === 'document' ? !prevState.showDocumentMenu : false,
            showToolsMenu: menuName === 'tools' ? !prevState.showToolsMenu : false,
            showHelpMenu: menuName === 'help' ? !prevState.showHelpMenu : false
        }));
    }

    closeAllMenus = () => {
        this.setState({
            showFileMenu: false,
            showEditMenu: false,
            showSearchMenu: false,
            showViewMenu: false,
            showDocumentMenu: false,
            showToolsMenu: false,
            showHelpMenu: false
        });
    }

    render() {
        const { filename, content, lineCount, zoomLevel, showFileMenu, showEditMenu, showSearchMenu, showViewMenu, showDocumentMenu, showToolsMenu, showHelpMenu } = this.state;
        const lineNumbers = Array.from({ length: Math.max(lineCount, 30) }, (_, i) => i + 1);
        const fontSize = Math.round(13 * (zoomLevel / 100));
        const lineHeight = 1.5;

        return (
            <div className="w-full h-full flex flex-col relative" style={{
                backgroundColor: '#2d3036',
                fontFamily: '"Ubuntu", "Noto Sans", sans-serif',
                color: '#d3d7cf'
            }} onClick={this.closeAllMenus}>
                {/* Menu Bar */}
                <div className="flex items-center relative" style={{
                    height: '32px',
                    backgroundColor: '#2d3036',
                    borderBottom: '1px solid #1c1f26',
                    fontSize: '13px',
                    fontWeight: '400'
                }}>
                    <div className="flex items-center space-x-0">
                        <div className="relative">
                            <div 
                                className="px-3 py-1 hover:bg-gray-700 cursor-pointer" 
                                onClick={(e) => { e.stopPropagation(); this.toggleMenu('file'); }}
                                style={{ backgroundColor: showFileMenu ? '#3d3d3d' : 'transparent' }}
                            >
                                File
                            </div>
                            {showFileMenu && (
                                <div className="absolute top-full left-0 z-50 shadow-lg" style={{
                                    backgroundColor: '#353945',
                                    minWidth: '200px',
                                    border: '1px solid #1c1f26'
                                }}>
                                    <div className="py-1">
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">New</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Open...</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Save</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Save As...</div>
                                        <div style={{ height: '1px', backgroundColor: '#1c1f26', margin: '4px 0' }}></div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Print...</div>
                                        <div style={{ height: '1px', backgroundColor: '#1c1f26', margin: '4px 0' }}></div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Close</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <div 
                                className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); this.toggleMenu('edit'); }}
                                style={{ backgroundColor: showEditMenu ? '#3d3d3d' : 'transparent' }}
                            >
                                Edit
                            </div>
                            {showEditMenu && (
                                <div className="absolute top-full left-0 z-50 shadow-lg" style={{
                                    backgroundColor: '#353945',
                                    minWidth: '200px',
                                    border: '1px solid #1c1f26'
                                }}>
                                    <div className="py-1">
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Undo</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Redo</div>
                                        <div style={{ height: '1px', backgroundColor: '#1c1f26', margin: '4px 0' }}></div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Cut</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Copy</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Paste</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Delete</div>
                                        <div style={{ height: '1px', backgroundColor: '#1c1f26', margin: '4px 0' }}></div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Select All</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <div 
                                className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); this.toggleMenu('search'); }}
                                style={{ backgroundColor: showSearchMenu ? '#3d3d3d' : 'transparent' }}
                            >
                                Search
                            </div>
                            {showSearchMenu && (
                                <div className="absolute top-full left-0 z-50 shadow-lg" style={{
                                    backgroundColor: '#353945',
                                    minWidth: '200px',
                                    border: '1px solid #1c1f26'
                                }}>
                                    <div className="py-1">
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Find...</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Find and Replace...</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Go to Line...</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <div 
                                className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); this.toggleMenu('view'); }}
                                style={{ backgroundColor: showViewMenu ? '#3d3d3d' : 'transparent' }}
                            >
                                View
                            </div>
                            {showViewMenu && (
                                <div className="absolute top-full left-0 z-50 shadow-lg" style={{
                                    backgroundColor: '#353945',
                                    minWidth: '200px',
                                    border: '1px solid #1c1f26'
                                }}>
                                    <div className="py-1">
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Highlight Mode</div>
                                        <div style={{ height: '1px', backgroundColor: '#1c1f26', margin: '4px 0' }}></div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm" onClick={(e) => { e.stopPropagation(); this.zoomIn(); }}>Zoom In</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm" onClick={(e) => { e.stopPropagation(); this.zoomOut(); }}>Zoom Out</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm" onClick={(e) => { e.stopPropagation(); this.resetZoom(); }}>Normal Size</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <div 
                                className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); this.toggleMenu('document'); }}
                                style={{ backgroundColor: showDocumentMenu ? '#3d3d3d' : 'transparent' }}
                            >
                                Document
                            </div>
                            {showDocumentMenu && (
                                <div className="absolute top-full left-0 z-50 shadow-lg" style={{
                                    backgroundColor: '#353945',
                                    minWidth: '200px',
                                    border: '1px solid #1c1f26'
                                }}>
                                    <div className="py-1">
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">File Properties</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <div 
                                className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); this.toggleMenu('tools'); }}
                                style={{ backgroundColor: showToolsMenu ? '#3d3d3d' : 'transparent' }}
                            >
                                Tools
                            </div>
                            {showToolsMenu && (
                                <div className="absolute top-full left-0 z-50 shadow-lg" style={{
                                    backgroundColor: '#353945',
                                    minWidth: '200px',
                                    border: '1px solid #1c1f26'
                                }}>
                                    <div className="py-1">
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Check Spelling...</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Preferences</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <div 
                                className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); this.toggleMenu('help'); }}
                                style={{ backgroundColor: showHelpMenu ? '#3d3d3d' : 'transparent' }}
                            >
                                Help
                            </div>
                            {showHelpMenu && (
                                <div className="absolute top-full left-0 z-50 shadow-lg" style={{
                                    backgroundColor: '#353945',
                                    minWidth: '200px',
                                    border: '1px solid #1c1f26'
                                }}>
                                    <div className="py-1">
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">Help Contents</div>
                                        <div className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm">About Text Editor</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex items-center px-2 space-x-1" style={{
                    height: '40px',
                    backgroundColor: '#353945',
                    borderBottom: '1px solid #1c1f26'
                }}>
                    {/* New */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="New">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                            <path d="M14 2v6h6" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* Open */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="Open">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                        </svg>
                    </button>

                    {/* Save */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="Save">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                            <path d="M7 3v5h9" stroke="#d3d7cf" strokeWidth="2"/>
                            <rect x="9" y="13" width="6" height="8" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                        </svg>
                    </button>

                    <div style={{ width: '1px', height: '24px', backgroundColor: '#4a4f5c', margin: '0 4px' }}></div>

                    {/* Undo */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="Undo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M3 7v6h6" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 17a9 9 0 00-9-9 9 9 0 00-9 9" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round" fill="none"/>
                        </svg>
                    </button>

                    {/* Redo */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="Redo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M21 7v6h-6" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 17a9 9 0 019-9 9 9 0 019 9" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round" fill="none"/>
                        </svg>
                    </button>

                    <div style={{ width: '1px', height: '24px', backgroundColor: '#4a4f5c', margin: '0 4px' }}></div>

                    {/* Cut */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="Cut">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="6" cy="6" r="3" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                            <circle cx="6" cy="18" r="3" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    {/* Copy */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="Copy">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <rect x="9" y="9" width="13" height="13" rx="2" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                        </svg>
                    </button>

                    {/* Paste */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="Paste">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                            <rect x="8" y="2" width="8" height="4" rx="1" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                        </svg>
                    </button>

                    <div style={{ width: '1px', height: '24px', backgroundColor: '#4a4f5c', margin: '0 4px' }}></div>

                    {/* Search */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="Find">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="8" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                            <path d="M21 21l-4.35-4.35" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    {/* Replace */}
                    <button className="p-1.5 rounded hover:bg-gray-600 transition-colors" title="Find and Replace">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round" fill="none"/>
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                    </button>

                    <div className="flex-1"></div>

                    {/* Zoom Out */}
                    <button 
                        className="p-1.5 rounded hover:bg-gray-600 transition-colors" 
                        title="Zoom Out"
                        onClick={(e) => { e.stopPropagation(); this.zoomOut(); }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="8" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                            <path d="M8 11h6" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M21 21l-4.35-4.35" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    {/* Zoom Level */}
                    <span className="px-2 text-sm" style={{ color: '#d3d7cf' }}>{zoomLevel}%</span>

                    {/* Zoom In */}
                    <button 
                        className="p-1.5 rounded hover:bg-gray-600 transition-colors" 
                        title="Zoom In"
                        onClick={(e) => { e.stopPropagation(); this.zoomIn(); }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="8" stroke="#d3d7cf" strokeWidth="2" fill="none"/>
                            <path d="M11 8v6M8 11h6" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M21 21l-4.35-4.35" stroke="#d3d7cf" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>

                {/* Warning Banner */}
                <div className="flex items-center px-4 py-2 space-x-3" style={{
                    backgroundColor: '#fce94f',
                    borderBottom: '1px solid #edd400',
                    color: '#2e3436',
                    fontSize: '12px'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#ce5c00" strokeWidth="2" fill="#fce94f"/>
                        <path d="M12 9v4M12 17h.01" stroke="#ce5c00" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontWeight: '500' }}>
                        Warning: you are using the root account. You may harm your system.
                    </span>
                </div>

                {/* Editor Area */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Line Numbers */}
                    <div className="flex flex-col py-2 px-2 select-none overflow-y-auto" style={{
                        backgroundColor: '#2a2e36',
                        borderRight: '1px solid #1c1f26',
                        minWidth: '50px',
                        fontFamily: '"Ubuntu Mono", "Courier New", monospace',
                        fontSize: `${fontSize}px`,
                        color: '#888a85',
                        lineHeight: lineHeight,
                        textAlign: 'right'
                    }}>
                        {lineNumbers.map(num => (
                            <div key={num} style={{ height: `${fontSize * lineHeight}px` }}>{num}</div>
                        ))}
                    </div>

                    {/* Text Area */}
                    <div className="flex-1 overflow-auto">
                        <textarea
                            value={content}
                            onChange={this.handleContentChange}
                            className="w-full h-full px-3 py-2 resize-none outline-none"
                            style={{
                                backgroundColor: '#2d3036',
                                color: '#d3d7cf',
                                fontFamily: '"Ubuntu Mono", "Courier New", monospace',
                                fontSize: `${fontSize}px`,
                                lineHeight: lineHeight,
                                border: 'none',
                                caretColor: '#d3d7cf'
                            }}
                            spellCheck={false}
                        />
                    </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between px-3" style={{
                    height: '28px',
                    backgroundColor: '#353945',
                    borderTop: '1px solid #1c1f26',
                    fontSize: '12px',
                    color: '#d3d7cf'
                }}>
                    <div className="flex items-center space-x-4">
                        <span>Ln {content.split('\n').length}, Col 1</span>
                        <span>UTF-8</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>Plain Text</span>
                        <span>Unix (LF)</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextEditor;

export const displayTextEditor = (id, minimizeApp, maximizeApp, closeApp, openApp) => {
    return <TextEditor 
        id={id} 
        minimizeApp={minimizeApp} 
        maximizeApp={maximizeApp} 
        closeApp={closeApp} 
        openApp={openApp}
    />;
}
