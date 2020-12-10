import { useEffect } from 'react';

export default function UseDocTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}