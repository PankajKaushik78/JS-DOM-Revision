function fun() {
  let x = this? class y{} : class z{};
  console.log(typeof x + " ," + typeof z);
}
fun()