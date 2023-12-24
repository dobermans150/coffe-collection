import '../global.css'

export interface HeaderText {
    text: string
}
export const Header = ({ text }: HeaderText) => {
    return <div className='text-gray-200 font-extrabold'>{ text }</div>
}