export async function get(url) {
    try {
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'image/jpeg'
            }
        })
        const blob = await response.blob()
        return [URL.createObjectURL(blob), null];
    }
    catch (error) {
        console.error(`get: error occurred ${error}`);
        return [null, error]
    }
}   

function foo(props) {
    const [screenShot, setScreenshot] = useState(undefined)
    const url = props.url
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const [response, error] = await get(url)
            if (error)
                log(error)
            else {
                log(`got response ${response}`)
            setScreenshot(response)
            }
        }
        fetchData();
    }, [url])

    return <div>
        <img src={screenShot} className="Screenshot" alt="showing screen capture" />
    </div>
}