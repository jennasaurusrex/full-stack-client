# ID=2 TOKEN=tokengoeshere sh curl-scripts/examples/destroy.sh

curl "https://fast-dawn-51329.herokuapp.com/examples/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
