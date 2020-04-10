
# ⏰ Thai Current Time  ![Get Thai Current Time](https://github.com/pluz85/thai-current-time/workflows/Get%20Thai%20Current%20Time/badge.svg) ![units-test](https://github.com/pluz85/thai-current-time/workflows/units-test/badge.svg)

This action get Date and Time in Asia/Bangkok Timezone and output in Thai Language `ภาษาไทย` with Luxon Wrapper and a modified to display Thai language in non-Node environment

## Outputs

### `thaiTime`

The Output time will be in Thai language and base on Buddist Calendar 

Example : `จ. 11 เม.ย. 63 เวลา 02:06` ✨

## Usage

```yaml
steps:
- name: Get Thai Current Time
  uses: pluz85/thai-current-time@1.0
  id: thai-current-time
- name: Get Time
  env:
    T_TIME: "${{ steps.thai-current-time.outputs.thaiTime }}"
  run: echo $T_TIME
```
