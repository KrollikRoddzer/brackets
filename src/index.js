module.exports = function check(str, bracketsConfig) {
  let arrOpen = [];
  let same = [];
  bracketsConfig.forEach(item =>
      {
        if (item[0] == item[1])
        {
          same.push(item[0]);
        }
        else
        {
          arrOpen.push(item[0]);
        }
      }
  );
  let stack = [];
  for (let i = 0; i < str.length; ++i)
  {
    if (same.includes(str[i]))
    {
      if (stack.length != 0 && stack[stack.length - 1] == str[i])
      {
        stack.pop();
      }
      else
      {
        stack.push(str[i]);
      }
    }
    else if (arrOpen.includes(str[i]))
    {
      stack.push(str[i]);
    }
    else
    {
      if (stack.length != 0 && stack[stack.length - 1] == findOpposite(bracketsConfig, str[i]))
      {
        stack.pop();
      }
      else
      {
        return false;
      }
    }
  }

  return stack.length == 0;
}

function findOpposite(config, item)
{
  for (let i = 0; i < config.length; ++i)
  {
    if (config[i][1] == item) return config[i][0];
  }
}