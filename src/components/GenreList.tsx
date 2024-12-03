import "./GenreList.css"

export default function GenreList() {
    const genres = ["All", "Games", "Music", "Videos", "Animals", "Technology", "Bakery", "Sports" ];

    return (
        <div className={"genre-list"}>
            {Array.from({length: genres.length}, (_, index) => (
                <p className={"genre"}>{genres[index]}</p>
            ))}
        </div>
    );
}