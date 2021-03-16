
export const onInputChange = (val: string, callback: any) => {
    if (val == '') {
        callback(0)
        return 'input is empty'
    }

    const parsedNum = Number(val)

    if (typeof parsedNum != 'number') {
        alert('enter a number please')
        return 'invalid number'
    }

    callback(parsedNum)
    return `callback executed, new val: ${parsedNum}`
}