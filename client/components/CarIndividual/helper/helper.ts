
export const deleteTag = (data: string) => {
    let newData = data.split('>')
    let anewData = newData[1].replace('</p', '')
    return anewData
}