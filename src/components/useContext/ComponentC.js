import React from 'react';
import ComponentD from './ComponentD';

export default function ComponentC() {
    return(
        <div className="text-center">
            Hello Component C
            <ComponentD />
        </div>
    );
}