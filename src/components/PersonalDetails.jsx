export function PersonalDetails({ name, email, phone, address }) {
  return (
    <>
      <h2>Personal Details</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} />
      <label htmlFor="email">email:</label>
      <input type="email" id="email" value={email} />
      <label htmlFor="phone">Phone number:</label>
      <input type="phone" id="phone" value={phone} />
      <label htmlFor="address">Address:x</label>
      <input type="text" id="address" value={address} />
    </>
  );
}

export function PersonalDetailsCV({ name, email, phone, address }) {
  return 
  // To do
}