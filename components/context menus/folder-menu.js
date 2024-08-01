import React from 'react'

function FolderMenu(props) {

    const deleteFolder = () => {
        if (props.deleteFolder && props.selectedFolderId) {
            props.deleteFolder(props.selectedFolderId);
        }
    }

    return (
        <div id="folder-menu" className={(props.active ? " block " : " hidden ") + " cursor-default menu-container absolute border border-black rounded text-left font-light py-2 text-white popup-shadow bg-ub-cool-grey border-gray-900"}>
            <div onClick={deleteFolder} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">Delete Folder</span>
            </div>
        </div>
    )
}

export default FolderMenu
