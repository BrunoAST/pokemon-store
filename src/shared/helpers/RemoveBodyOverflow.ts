export default function RemoveBodyOverflow(show: boolean) {
    if (!show) {
        document.body.style.overflowY = 'auto';
        return;
    };
    
    document.body.style.overflowY = 'hidden';
}
