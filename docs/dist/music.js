const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "小幸运",
        artist: '田馥甄',
        url: '/music/298649419.mp3',
        cover: '/music/298649419.jpeg?param=130y130',
    }
    ]
});