
export default function TaskList(props) {
    const [text, setText] = useState('');
    const [taskList, setTaskList] = useState(['fazer trabalho', 'estudar redes']);

    function addTask(text) {
        setTaskList = [...taskList, text];

        text = ''
    }

    return (
        <div>



        </div>

    )
}