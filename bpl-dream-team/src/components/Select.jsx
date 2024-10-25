import ShowPlayer from './ShowPlayer';

const Select = ({palyer,handleDelete,handleAddMorePlayer}) => {
    
     
    return (
        <div className='lg:mx-40 md:mx-10 mx-2 my-16'>
            {
               palyer ? palyer.map(show=><ShowPlayer handleDelete={handleDelete} show={show}></ShowPlayer>) : ''
            }
              <button onClick={handleAddMorePlayer}  className='py-2 px-2 border rounded-lg font-bold bg-yellow-400'>Add More Player</button>
        </div>
    );
};

export default Select;