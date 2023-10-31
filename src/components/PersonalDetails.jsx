export function PersonalDetails({ name, email, phone, address }) {
  return (
    <div className="personalDetails component">
      <h2>Personal Details</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} />
      <label htmlFor="email">email:</label>
      <input type="email" id="email" value={email} />
      <label htmlFor="phone">Phone number:</label>
      <input type="phone" id="phone" value={phone} />
      <label htmlFor="address">Address:x</label>
      <input type="text" id="address" value={address} />
    </div>
  );
}

export function PersonalDetailsCV({ name, email, phone, address }) {
  return (
    <div className="personalDetailsCV componentCV">
      <h1>{name}</h1>
      {email && (<div className="emailCV"><span className="material-symbols-sharp">mail</span><span> {email}</span></div>)}
      {phone && (<div className="phoneCV"><span className="material-symbols-sharp">phone</span><span> {phone}</span></div>)}
      {address && (<div className="addressCV"><span className="material-symbols-sharp">location_on</span><span> {address}</span></div>)}
    </div>
  )
  // To do

}