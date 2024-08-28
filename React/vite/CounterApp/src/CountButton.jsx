import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function CountButton({type, setCount, locked}) {
    const handelClick = (event) =>{
        setCount((prev) => {
            if(type === 'minus'){
                if(prev === 0){
                    return 0;
                }
                return prev - 1;
            }else{
                if(prev === 5){
                    return 5;
                }
                return prev + 1;
            }

        });
        event.currentTarget.blur();
    }
    return(
      <button disabled={locked} className='count-btn'
          onClick={handelClick}
        >
            {
                type === 'minus' ? <MinusIcon className='count-btn-icon'/> :
                <PlusIcon className='count-btn-icon'/>
            }
      </button>
    );
}