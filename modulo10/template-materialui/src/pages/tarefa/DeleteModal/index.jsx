import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Modal,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  p: 4,
};

export default function DeleteModal({
  title = "Apagar Registro",
  open = false,
  onClose = () => null,
  onSubmit = () => null,
}) {
  return (
    <Modal title={title} open={open} onClose={onClose}>
      <Grid container spacing={2}>
        <Card sx={style}>
          <CardHeader title="Tarefas" subheader="Excluir Tarefa" />
          <CardContent
            sx={{
              width: "95%",
              maxWidth: "100%",
              mt: 2,
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography fontSize={"sm"} fontWeight={"bold"} align="center">
              Tem certeza que deseja apagar este registro do sistema?
            </Typography>
            <Button onClick={onClose} variant="outlined" color="error">
              Não
            </Button>
            <Button onClick={onSubmit} variant="contained" color="success">
              Sim
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Modal>
  );
}
