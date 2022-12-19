const bcrypt = require('bcrypt')
const characters = [
    'A', 'B', 'C', '0', 'D', '1', 'E', 'F', 'G',
    '2', 'H', 'I', '3', 'J', 'K', '4', 'l', 'M',
    'N', '5', 'O', 'P', '6', 'Q', 'R', 'S', '7',
    'T', 'U', 'V', '8', 'W', '9', 'X', 'Y', 'Z','A']


class UserUserService {

  async hashpass(password)
  {
    const password_hash = await  bcrypt.hash(password, 10);
    return password_hash;
  }

  async comparepass(password, hasspass){
    if(await bcrypt.compare(password, hasspass))
    {
        return true;
    }
    return false;
  }

  async comparepass(password, hasspass) {
    if(await bcrypt.compare(password, hasspass))
    {
        return true;
    }
    return false;
  }
}

module.exports = new UserUserService