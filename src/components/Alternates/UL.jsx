export default function UL({ lists }) {
    const lis = lists.map((list) => <li key={list.toString}>{list}</li>)

    return (
        <div className="UL">
            <ul>
                { lis }
            </ul>
        </div>
    );
}