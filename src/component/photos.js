import account from "../image/accountdp.jpg"

function Photos() {
    return (
        <div className="friend-requests">
            <div style={{background:"red"}}>
                <img src={account} width={150} height={200} />
            </div>
        </div>
    )
}

export default Photos