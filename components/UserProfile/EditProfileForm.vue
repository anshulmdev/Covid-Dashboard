<template>
<card>
    <h5 slot="header" class="title">Team Details</h5>
    <form>
        <div class="row">
            <div class="col-md-6">
                <base-input type="text" label="Name" :disabled="true" placeholder="Anshul Mishra">
                </base-input>
            </div>
            <div class="col-md-6">
                <base-input type="text" label="Name" :disabled="true" placeholder="Aman Negi">
                </base-input>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <base-input type="text" label="Roll Number" :disabled="true" placeholder="41220902717">
                </base-input>
            </div>
            <div class="col-md-6">
                <base-input type="text" label="Roll Number" :disabled="true" placeholder="41520902717">
                </base-input>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <base-input type="text" label="Year" :disabled="true" placeholder="CSE VII Sem">
                </base-input>
            </div>
            <div class="col-md-6">
                <base-input type="text" label="Year" :disabled="true" placeholder="CSE VII Sem">
                </base-input>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <base-input label="About Project">
                    <textarea class="form-control" placeholder="Will write later">
            </textarea>
                </base-input>
            </div>
        </div>
    </form>
</card>
</template>

<script>
export default {
    methods: {}
};
</script>

<style></style>
