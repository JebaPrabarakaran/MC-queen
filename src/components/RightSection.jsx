import React from 'react'

const RightSection = () => {
  return (

    <div>
      <div>
        <h1>
          Dashboard
        </h1>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="cardCard card1">
            <p><b>Total Likes</b></p>
            <p><b>50,120</b></p>

          </div>
        </div>
        <div className="col-4">
          <div className="cardCard card2">
            <p><b>Comments</b></p>
            <p><b>25,120</b></p>

          </div>
        </div>
        <div className="col-4">
          <div className="cardCard card3">
            <p><b>Total share</b></p>
            <p><b>10,320</b></p>

          </div>
        </div>

        <div>
          <h1>
            Recent Activity
          </h1>
        </div>

      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Joined</th>
            <th scope="col">Type</th>
            <th scope="col">Status</th>
          </tr>

         
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Jeba</td>
            <td>Jeba102001@gmail.com</td>
            <td>2021-05-20</td>
            <td>Member</td>
            <td>Liked</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Priya</td>
            <td>priyacharan@gmail.com</td>
            <td>2024-04-12</td>
            <td>New</td>
            <td>Shared</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Saran</td>
            <td>Saran@gmail.com</td>
            <td>2024-04-12</td>
            <td>New</td>
            <td>Shared</td>

          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Majin</td>
            <td>Majin@gmail.com</td>
            <td>2024-04-12</td>
            <td>New</td>
            <td>Shared</td>

          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Karuppan</td>
            <td>Karuppan@gmail.com</td>
            <td>2024-04-12</td>
            <td>New</td>
            <td>Shared</td>

          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default RightSection
