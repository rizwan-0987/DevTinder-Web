
const UserCard = (user) => {
    const { firstName, lastName, age, gender, photoUrl,about } = user.user;
    return (
      <div className="card bg-base-300 w-96 shadow-sm rounded-2xl my-10">
        <figure>
          <img className="rounded-2xl" src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + " " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Send Request</button>
          </div>
        </div>
      </div>
    );
}

export default UserCard
