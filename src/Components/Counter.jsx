export const Counter = ({ xyz }) => {
    console.log('~ xyz:', xyz);
    const handleDec = () => {
        xyz.setCount((prv) => prv - 1);
    };
    
}