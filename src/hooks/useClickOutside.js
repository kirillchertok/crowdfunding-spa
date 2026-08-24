import { useEffect } from 'react';

export const useClickOutside = ({ ref, onClose, enabled = true }) => {
    useEffect(() => {
        if (!enabled) {
            return;
        }

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClose, enabled]);
};
