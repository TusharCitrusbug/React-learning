import React from 'react'

export default function SingleTodo({name,desc}) {
    return (
        <div class="row">
            <div class="col-md-4">
                {name}
            </div>
            <div class="col-md-4">
                {desc}
            </div>
            <div class="hover-btn">
                <button type="button" class="close" data-dismiss="alert">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">Delete</span>
                </button>
            </div>
        </div>

    )
}
