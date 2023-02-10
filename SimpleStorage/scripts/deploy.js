async function main() {
  console.log("hi");
  let variable = 10;
  console.log(variable);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
