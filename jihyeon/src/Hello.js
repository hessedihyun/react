function Hello({ students, color = 'red' }) {
    return <div style={{ color }}>안녕하세요 {students}</div>;
}

Hello.defaultProps = {
    students:'바보들아',
    color: 'gold'
};

export default Hello;