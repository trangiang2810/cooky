import React from 'react'

const Register = () => {
  return (
    <div>
      <h1>Register the course</h1>
      <div>
        <p>
          Want to sign up for Hoc Mon Vietnamese 's cooking courses ? Please fill in the correct
          information in the form below! We will contact and advise directly!
        </p>
        <p>
          Nếu bạn muốn học khóa nấu ăn với yêu cầu các món ăn riêng, hãy chọn Khóa Bếp theo yêu cầu
          và điền nội dung khái quát vào ô Nội dung khóa Bếp theo yêu cầu bên dưới! (Ví dụ: học các
          món Lẩu, học các món Nướng, học làm nhân bánh mì…)
        </p>
        <label>
          <p>
            Learner's first and last name / Parent's first and last name (For Children's Cooking
            course):
          </p>
          <input type="text" name="" id="" />
        </label>
        <label>
          <p>Child's first and last name (If enrolling for Kids Cooking Course):</p>
          <input type="text" name="" id="" />
        </label>
        <label>
          <p>Phone Number (Please enter it correctly so we can contact you!)</p>
          <input type="number" name="" id="" />
        </label>
        <div>
          <p>
            Select a Course (Select a course here! If you have other needs, you can choose the
            required Kitchen Course and fill out the overview below!)
          </p>
          <input type="text" name="" id="" />
        </div>
        <label>
          <p>
            Contents of the On-Demand Kitchen Course (for those who want to learn to cook on
            demand):
          </p>
          <input type="text" name="" id="" />
        </label>
        <label>
          <p>Email</p>
          <input type="email" name="" id="" />
        </label>
      </div>
      <button>REGISTER NOW</button>
    </div>
  )
}

export default Register
