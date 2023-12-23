
export interface HeaderText {
    text: string
}
export const Header = ({ text }: HeaderText) => {
    return <div>{ text }</div>
}