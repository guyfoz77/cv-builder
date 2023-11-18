export function PersonalDetails({ personalDetails, onPersonalDetailsChange }) {
  return (
    <div className='personalDetails component'>
      <h2>Personal Details</h2>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        value={personalDetails.name}
        onChange={onPersonalDetailsChange}
      />
      <label htmlFor='email'>email:</label>
      <input
        type='email'
        id='email'
        value={personalDetails.email}
        onChange={onPersonalDetailsChange}
      />
      <label htmlFor='phone'>Phone number:</label>
      <input
        type='phone'
        id='phone'
        value={personalDetails.phone}
        onChange={onPersonalDetailsChange}
      />
      <label htmlFor='address'>Address:</label>
      <input
        type='text'
        id='address'
        value={personalDetails.address}
        onChange={onPersonalDetailsChange}
      />
    </div>
  )
}

export function PersonalDetailsCV({ name, email, phone, address }) {
  return (
    <div className='personalDetailsCV componentCV'>
      <h1>{name}</h1>
      {email && (
        <div className='emailCV'>
          <span className='material-symbols-sharp'>mail</span>
          <span> {email}</span>
        </div>
      )}
      {phone && (
        <div className='phoneCV'>
          <span className='material-symbols-sharp'>phone</span>
          <span> {phone}</span>
        </div>
      )}
      {address && (
        <div className='addressCV'>
          <span className='material-symbols-sharp'>location_on</span>
          <span> {address}</span>
        </div>
      )}
    </div>
  )
}
