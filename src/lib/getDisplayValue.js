import isOption from './isOption';

export default function getDisplayValue(value) {
    if (Array.isArray(value)) {
        return value.length? value.map(o => isOption(o) && o.name).join(', '): 'Add new trip';
    }

    return isOption(value) ? value.name : 'Add new trip';
}
