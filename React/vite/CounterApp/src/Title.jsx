export default function Title({locked}){
    return <h1 className="title">{
        locked ? 'LIMIT REACHED' : 'Fancy Counter'
    }</h1>
}